import React, { Component } from 'react'
import { Card, Row, Col, Form, Icon, Input, Button, Checkbox, Divider, Modal, Select, Dropdown, Menu } from 'antd';
import PropTypes from 'prop-types'

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
// function handleMenuClick(e) {
//   console.log('click', e);
// }
//  <Menu onClick={handleMenuClick}>
const menu = (
  <Menu>
    <Menu.Item key="1">Patricia Saramela</Menu.Item>
    <Menu.Item key="2">Felipe Genuino</Menu.Item>
    <Menu.Item key="3">Carlos Eduardo</Menu.Item>
  </Menu>
);

export class AntForm extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  toggle = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }
  handleOk = () => {
    console.log('OK')
    this.toggle();
  }

  handleCancel = () => {
    this.toggle();
  }
  render() {
    return (
      <div>
        <Row gutter={20}>
          <Col sm={{ span: 24, offset: 0 }} md={{ span: 12, offset: 6 }}>
            <Form>
              <Row gutter={20}>
                <Col md={12} sm={24}>
                  <FormItem>
                    Label
								<Input placeholder="Placeholder" />
                  </FormItem>
                </Col>
                <Col md={12} sm={24}>
                  <FormItem>
                    Dolor
								<Input placeholder="Placeholder" />
                  </FormItem>
                </Col>
              </Row>
              <Row gutter={20}>
                <Col md={12} sm={24}>
                  <FormItem>
                    Label
								<Input placeholder="Placeholder" />
                  </FormItem>
                </Col>
                <Col md={12} sm={24}>
                  <FormItem>
                    Dolor
								<Input placeholder="Placeholder" />
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="space-between" align="bottom" gutter={20}>
                <Col md={12} sm={24}>
                  <FormItem>
                    <div>Lorem ipsum dolor</div>
                    <Checkbox>Lorem ipsum</Checkbox>
                    <Checkbox>Askimet dolor</Checkbox>
                  </FormItem>
                </Col>
                <Col md={12} sm={24}>
                  <FormItem>
                    <Button htmlType="submit" size="large" onClick={this.toggle}>
                      Abre Modal
								</Button>
                    <Modal
                      title="Basic Modal"
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                    >
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </Modal>
                  </FormItem>
                </Col>
              </Row>
              <Row gutter={20}>
                <Col md={8} sm={24}>
                  <div>Askimet lorem</div>
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Selecione a opção"
                    // optionFilterProp="children"
                    // onChange={handleChange}
                    // onFocus={handleFocus}
                    // onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
								</Col>
                <Col md={16} sm={24}>
                  Lorem digitium
							<Input placeholder="Placeholder" />
                </Col>
              </Row>
              <Row gutter={20}>
                <Col xs={24}>
                  Label
							<TextArea rows={4} />
                </Col>
              </Row>
              <Row gutter={20}>
                <Col style={{ textAlign: 'right' }}>
                  <Button>Cancelar</Button>
                  <Dropdown overlay={menu}>
                    <Button type="primary">
                      Enviar para <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div >
    )
  }
}

export default AntForm
