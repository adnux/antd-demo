import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Card, Row, Col, Form, Icon, Input, Button, Checkbox, Divider, Modal, Select, Dropdown, Menu } from 'antd';
import AntForm from './antForm';
// import { DatePicker } from 'antd';

function App() {
  return (
    <AntForm />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
