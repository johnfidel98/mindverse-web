import Footer from "./Footer";
import Nav from "./Nav";

const MainLayout = ({ children }) => {
  return (
    <div className="h-screen bg-right bg-cover overflow-hidden sm:overflow-y-auto" style={{ backgroundImage: "url('bg.svg')" }}>
      <Nav />
      {children}
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <MainLayout>
      <div className='h-5/6 container px-6 mx-auto items-center'>
        <div className="h-5/6 flex flex-col lg:flex-row items-center">
          {children}
        </div>
        <div className="h-1/6">
          <Footer />
        </div>
      </div>
    </MainLayout>
  );
};

const PageLayout = ({ children }) => {
  return (
    <MainLayout>
      <div className="h-5/6">
        <div className='container pt-4 md:pt-5 h-5/6 px-6 mx-auto overflow-x-hidden overflow-y-auto'>
          {children}
        </div>
        <div className='container h-1/6 px-6 mx-auto'>
          <Footer />
        </div>
      </div>
    </MainLayout>
  );
};

export { Layout, PageLayout };
