import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GradingIcon from '@mui/icons-material/Grading';
import ListAltIcon from '@mui/icons-material/ListAlt';
import 'bootstrap-icons/font/bootstrap-icons.css';


import './Sidebar.css';

function Sidebar({ sidebar }) {
  const location = useLocation();
  const [activePage, setActivePage] = useState('');
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  const [userProfilePic, setUserProfilePic] = useState(localStorage.getItem('userProfilePic'));
  const [showSubjects, setShowSubjects] = useState(false);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  const toggleSubjects = () => {
    setShowSubjects(prevShowSubjects => !prevShowSubjects);
  };

  return (
    <div className={sidebar ? 'sidebar-fixed sidebar-open ' : 'sidebar-fixed'}>
      <div className='sidebar-nav'>
        <div>
          <div className='sidebar-accounnt'>
            <div className='tonyLogo-div'>
              {/* <CardMedia
                className="tonyLogo"
                component="img"
                alt="Logo"
                height=""
                image="../assets/images/production.png"
              /> */}
            </div>
          </div>
          <div className='sidebar-account'>
            <div className='logoName-div'>
              <p className='logoName' variant='h5' style={{ margin: '20px 10px', textAlign: 'center' }}>SURVEY</p>
            </div>
          </div>
        </div>
        <div className='sidebar-links'>
          <div>
            <div className='menu-header small text-uppercase'>
              <p className='menu-header-text'>Menu</p>
            </div>
            {/* Survey Link */}
            <div>
              <div style={{ padding: '0px 7px' }}>
                <Link className={`links ${activePage === '/survey' ? 'active' : ''}`} to='/survey' data-tooltip='Production' data-placement='right'>
                <GradingIcon className='iconn' />
                  <span className='link-text'>Survey</span>
                </Link>
              </div>
            </div>

            {/* Subjects Link with Dropdown */}
            <div>
              <div style={{ padding: '0px 7px' }}>
                <div className={`links sp-bt`} onClick={toggleSubjects} data-tooltip='Project' data-placement='right' style={{ cursor: 'pointer' }}>
                <ListAltIcon className='iconn' />
                  <span className='link-text'>Section</span>
                  {/* <span className='dropdown-icon' style={{fontSize:'9px'}}>{showSubjects ? '▲' : '▼'}</span> */}
                  {/* <ion-icon name="caret-down-outline"></ion-icon> */}
                  <span className='dropdown-icon' style={{fontSize:'9px',marginLeft:'40px'}}>{showSubjects ? <i class="bi bi-caret-down-fill"></i> : <i class="bi bi-caret-right-fill"></i>}</span>

                </div>
              </div>
              {showSubjects && (
                <div className='subject-links'>
                  <div style={{ padding: '0px 14px' }}>
                    <Link className={`links dis-fl-jc-cen ${activePage === '/section1' ? 'active' : ''}`} to='/section1'>
                      <span className='link-text'>Section A</span>
                    </Link>
                  </div>
                  <div style={{ padding: '0px 14px' }}>
                    <Link className={`links dis-fl-jc-cen ${activePage === '/section2' ? 'active' : ''}`} to='/section2'>
                      <span className='link-text'>Section B</span>
                    </Link>
                  </div>
                  <div style={{ padding: '0px 14px' }}>
                    <Link className={`links dis-fl-jc-cen ${activePage === '/section3' ? 'active' : ''}`} to='/section3'>
                      <span className='link-text'>Section C</span>
                    </Link>
                  </div>
                </div>
              )}
              <div className='menu-header small text-uppercase'>
                  <p className='menu-header-text'>Account</p>
              </div>

              {/* Logout Link */}
              <div >
                <div style={{padding:'0px 7px'}}>
                    <Link className={`links ${activePage === '/' ? 'active' : ''}`} to="/" data-tooltip="Logout" data-placement="right"><ExitToAppIcon className='iconn' /> <span className='link-text'>Logout</span> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;









