import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { menuList } from './ListOfMenu';

class Login extends Component {


  render() {
    return (
        <div>
          <button type="button" class="btn btn-info btn-lg pull-right" data-toggle="modal" data-target="#myModal">Login</button>
          <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">

              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">modal Login</h4>
                </div>
                <div class="modal-body">
                  <form class="form-group">
                    <input class="form-control" type="text" name="name" placeholder="Login" />
                    <input class="form-control" type="text" name="pass" placeholder="pass" />
                    <input class="btn btn-danger btn-xs center-block mt-0" type="submit" name="submit" value="submit" />
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>

            </div>
          </div>
        </div>
    );
  }

}

export default Login;
