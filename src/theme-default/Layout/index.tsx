import { usePageData } from '../../runtime';
import { Nav } from '../components/Nav';
import { HomeLayout } from './HomeLayout';
import { DocLayout } from './DocLayout';
import 'uno.css';
import '../style/base.css';
import '../style/vars.css';
import '../style/animation.css';
import '../style/doc.css';

export function Layout() {
  const pageData = usePageData();
  const { pageType } = pageData;
  const getContent = () => {
    if (pageType === 'home') {
      return <HomeLayout />;
    } else if (pageType === 'doc') {
      return <DocLayout />;
    } else {
      return <div>404 页面</div>;
    }
  };
  return (
    <div>
      <Nav />
      <section
        style={{
          paddingTop: 'var(--docuit-nav-height)'
        }}
      >
        {getContent()}
      </section>
    </div>
  );
}
