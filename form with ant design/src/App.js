import "./index.css";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }} // از کادر input ایجاد فاصله 
          wrapperCol={{ span: 20 }}    //عرض کادر قرممون
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Form.Item
            name="Name"
            label="Name"
            rules={[
              {
                required: true,  //ستاره بقل 
                message: "Please enter your name",
              },
              { whitespace: true },  //برای اینکه اسپیس خال قبول نکنه
              { min: 3 }, //حداثل تعداد character
            ]}
            hasFeedback  //بای تیک بغل کادر
          >
            <Input placeholder="Your Full Name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
              },
              { min: 6 },
              {
                validator: (_, value) =>
                  value && value.includes("A")
                    ? Promise.resolve()
                    : Promise.reject("Password does not match criteria."),
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({     ///???????????????
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered does not match."
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          <Form.Item name="gender" label="Gender" requiredMark="optional">
            <Select placeholder="Select your gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="date of birth"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please provide your date of birth",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Date of birth"
            />
          </Form.Item>

          <Form.Item
            name="website"
            label="Website"
            rules={[{ type: "url", message: "Please enter a valid url" }]}
            hasFeedback
          >
            <Input placeholder="Add your website url" />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;