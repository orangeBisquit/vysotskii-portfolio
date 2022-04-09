import './Layout.scss'

function Layout({children}) {
  return (
    <div className='Layout'>
      <div className='Layout__container'>
        {children}
      </div>
    </div>
  );
}

export default Layout;
