import Component from '../BaseComponent';
import State from '../State';

type Props = {
  pub: string;
  placeholder?: string;
};

type State = {
  name: string;
};

class Name extends Component<Props, State> {
  componentDidMount(): void {
    State.public.user(this.props.pub).get('profile').get('name').on(this.inject());
  }

  render() {
    return this.state.name ?? this.props.placeholder ?? '';
  }
}

export default Name;
