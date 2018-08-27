import React from 'react';
import {
  Button,
  Icon,
  Label,
  Tab,
  Dropdown,
  Checkbox,
  Input,
  TextArea,
  Form,
  Confirm,
  Popup,
  Card,
  Image,
  Modal,
  Header,
} from 'semantic-ui-react';
import { toast } from 'react-toastify';

const panes = [
  {
    menuItem: 'Tab 1',
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
];

const stateOptions = [
  { key: 'AL', value: 'AL', text: 'Alabama' },
  { key: 'GA', value: 'GA', text: 'Georgia' },
];

const Semantic = () => (
  <div>
    <br />
    <br />
    <br />
    <div>
      <Tab menu={{ secondary: true }} panes={panes} />
    </div>
    <br />
    <br />
    <div>
      <Dropdown placeholder="State" search selection options={stateOptions} />
    </div>
    <br />
    <br />
    <div>
      <Button primary>primary</Button>
      <Button secondary>secondary</Button>
      <Button animated="fade">
        <Button.Content visible>Sign-up for a Pro account</Button.Content>
        <Button.Content hidden>$12.99 a month</Button.Content>
      </Button>
      <Button as="div" labelPosition="right">
        <Button color="red">
          <Icon name="heart" />
          Like
        </Button>
        <Label as="a" basic color="red" pointing="left">
          2,048
        </Label>
      </Button>
    </div>
    <br />
    <div>
      <Checkbox toggle />
      <Checkbox label="Make my profile visible" />
    </div>
    <br />
    <div>
      <Input placeholder="Search..." />
    </div>
    <br />
    <div>
      <Form>
        <TextArea placeholder="Tell us more" />
      </Form>
    </div>
    <br />
    <div>
      <ConfirmExampleConfirm />
    </div>
    <br />
    <div>
      <Popup trigger={<Button icon="add" />} content="Add users to your feed" />
    </div>
    <br />
    <div>
      <Card>
        <Image src="http://via.placeholder.com/350x150" />
        <Card.Content>
          <Card.Header>My Neighbor Totoro</Card.Header>
          <Card.Description>
            Two sisters move to the country with their father in order to be
            closer to their hospitalized mother, and discover the surrounding
            trees are inhabited by magical spirits.
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
    <br />
    <div>
      <ModalModalExample />
    </div>
    <br />
    <div>
      <Button onClick={() => toast('Wow so easy !')} primary>
        Show toast
      </Button>
    </div>
    <br />
    <br />
    <div>{/* <DatePicker selected={moment()} /> */}</div>
    <br />
    <br />
    <br />
  </div>
);

class ConfirmExampleConfirm extends React.Component {
  state = { open: false };

  show = () => this.setState({ open: true });
  handleConfirm = () => this.setState({ open: false });
  handleCancel = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <Button onClick={this.show}>Show</Button>
        <Confirm
          open={this.state.open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    );
  }
}

const ModalModalExample = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image
        wrapped
        size="medium"
        src="/assets/images/avatar/large/rachel.png"
      />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>
          We have found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default Semantic;
