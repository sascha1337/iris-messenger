import Session from '../Session';
import {translate as t} from '../translations/Translation';
import { route } from 'preact-router';
import Button from '../components/basic/Button';
import Component from '../BaseComponent';

export default class LogoutConfirmation extends Component {
render () {
    return (
    <div class="main-view" id="logout-confirmation">
        <div class="centered-container">
            <p dangerouslySetInnerHTML={{__html: t('logout_confirmation_info')}}></p>
            <p>
                <Button onClick={() => route('/settings')}>{t('back')}</Button>
            </p>
            <p>
                <Button className="logout-button" onClick={() => Session.logOut()}>{t('log_out')}</Button>
            </p>
        </div>
    </div>
);
}
}