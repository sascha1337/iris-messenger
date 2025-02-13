import { html } from 'htm/preact';
import Component from '../../BaseComponent';
import {ExistingAccountLogin} from '../Login';
import {translate as t} from '../../translations/Translation';
import { route } from 'preact-router';
import Button from '../../components/basic/Button';

export default class AccountSettings extends Component {

  render() {
    return (
        <>
        <div class="centered-container">
        <h3>{t('account')}</h3>
        <p>
          <b>{t('save_backup_of_privkey_first')}</b> {t('otherwise_cant_log_in_again')}
        </p>
        <div style="">
          <Button onClick={() => route('/logout')}>{t('log_out')}</Button>
          <Button onClick={() => this.setState({showSwitchAccount: !this.state.showSwitchAccount})}>{t('switch_account')}</Button>
        </div>
        {this.state.showSwitchAccount ? html`<${ExistingAccountLogin}/>` : ''}
        </div>
        </>
    );
  }
}
