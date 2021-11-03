import ContentLayout from "./ContentLayout";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const AppLayout = ( {children}) => {
  return (
    <div className='min-h-screen grid grid-rows-[auto,1fr,auto]'>
      <header>
        <ContentLayout>
          <Logo/>
        </ContentLayout>
      </header>

      <main>
        <ContentLayout>
          {children}
        </ContentLayout>
      </main>

      <footer>
        <ContentLayout>
          <SocialLinks/>
        </ContentLayout>
      </footer>
    </div>
  );
}
 
export default AppLayout;