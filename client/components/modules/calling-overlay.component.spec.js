/**
 * quasar
 *
 * Copyright (c) 2015 Glipcode http://glipcode.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions
 * of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import CallingOverlayComponent from './calling-overlay.component';

describe('Component: CallingOverlayComponent', () => {
  describe('when ringing', ()=> {
    const el = shallow(<CallingOverlayComponent
      ringing={true}
      invitees={[]}
      onTouchTap={()=> {}}
    />);

    it('should render ringing display', () => {
      chai.assert(false);
    });

    describe('when cancel button is touched', ()=> {
      it('should leave the room', ()=> {
        chai.assert(false);
      });
    });
  });

  describe('when not ringing', ()=> {
    it('should render contacts unavailable display', ()=> {
      const el = shallow(<CallingOverlayComponent
        ringing={false}
        invitees={[]}
        onTouchTap={()=> {}}
      />);
      chai.assert(false);
    });

    describe('when we have invitees', ()=> {
      const el = shallow(<CallingOverlayComponent
        ringing={false}
        invitees={[]}
        onTouchTap={()=> {}}
      />);

      it('should offer to retry', ()=> {
        chai.assert(false);
      });

      describe('when we click the retry button', ()=> {
        it('should call retry', ()=> {
          chai.assert(false);
        });
      });
    });

    describe('when we dont have invitees', ()=> {
      const el = shallow(<CallingOverlayComponent
        ringing={false}
        invitees={[]}
        onTouchTap={()=> {}}
      />);

      it('should offer to leave', ()=> {
        chai.assert(false);
      });

      describe('when we click the leave button', ()=> {
        it('should leave the room', ()=> {
          chai.assert(false);
        });
      });
    });
  });
});