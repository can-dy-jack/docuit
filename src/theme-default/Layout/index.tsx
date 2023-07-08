import { usePageData } from '../../runtime';
import { Nav } from '../components/Nav';
import { HomeLayout } from '../components/HomeLayout';
import 'uno.css';
import '../style/base.css';
import '../style/vars.css';

export function Layout() {
  const pageData = usePageData();
  const { pageType } = pageData;
  const getContent = () => {
    if (pageType === 'home') {
      return <HomeLayout />;
    } else if (pageType === 'doc') {
      return <div>正文页面</div>;
    } else {
      return <div>404 页面</div>;
    }
  };
  return (
    <div>
      <Nav />
      {getContent()}
    </div>
  );
}