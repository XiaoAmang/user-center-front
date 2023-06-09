import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '爱坤出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Baidu',
          title: '百度',
          href: 'https://www.baidu.com',
          blankTarget: true,
        },
        {
          key: 'Bing',
          title: 'Bing',
          href: 'https://www.bing.com',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
