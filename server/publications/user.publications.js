import {check, Match} from 'meteor/check';
import {MANAGER_ROLES} from '../../lib/roles';
import {Meteor} from 'meteor/meteor';
import {Roles} from 'meteor/alanning:roles';
import deepExtend from 'deep-extend';

// publish current user
Meteor.publish('user', function() {
  check(arguments, Match.OneOf({}, null, undefined));
  return Meteor.users.find(
    {_id: this.userId},
    {fields: {services: 1, history: 1, status: 1}}
  );
});

// publish all users
Meteor.smartPublish('users', function(opts) {
  check(opts, {
    room: Match.Maybe(String), // the current room
    contacts: Match.Maybe([Match.Any]), // include contacts
  });

  const userProjection = {
    fields: {profile: 1, history: 1, status: 1, services: 1},
  };

  if (Roles.userIsInRole(this.userId, MANAGER_ROLES)) {
    return Meteor.users.find({}, userProjection);
  } else {
    let res = [];
    res.push(Meteor.users.find(this.userId, userProjection));

    !!opts.room && res.push(Roles.getUsersInRole(opts.room, Roles.GLOBAL_GROUP, deepExtend({
      fields: {
        'roles.__global_roles__.$': 1,
      },
    }, userProjection)));

    !!opts.contacts && res.push(Meteor.users.find({
        'services.google.email': {$in: _.pluck(contacts, 'email')}
      }, {
        fields: {
          profile: 1,
          status: 1,
        }
      }
    ));

    return res;

    // TODO: we should really restrict which users are visible
    // this.ready()
  }
});

Meteor.publish('contacts', function(contacts) {
  check(arguments, [Match.Any]);

  if (!contacts || !contacts.length) {
    this.ready();
  }

  return Meteor.users.find({
    'services.google.email': {$in: _.pluck(contacts, 'email')}
  }, {
    fields: {
      profile: 1,
      status: 1,
    }
  });
});