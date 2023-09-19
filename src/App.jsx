import { Routes, Route } from "react-router-dom"
import { Layout } from "antd"
import { routesConfig } from "./config/menuConfig";
import Menu from "./components/Menu/Index.jsx";

const { Footer, Content } = Layout;
const contentStyle = {
  height: 'calc(100vh - 67px)'
};
const footerStyle = {
  backgroundColor: '#7dbcea',
  height: '67px',
  padding: '0px',
  display: 'flex',
  justifyContent: "center",
  alignItems: 'center'
};
function App() {
  return (
    <Layout>
      <Content style={contentStyle}>
        <Routes>
          {
            routesConfig.map(route => <Route key={route.path} path={route.path} element={<route.component />} />)
          }
        </Routes>
      </Content>
      <Footer style={footerStyle}>
        <Menu />
      </Footer>
    </Layout>
  )
}

export default App
