import React from 'react'
import { Link } from 'react-router-dom'

const Asidebar = () => {
  return (
    <>
      <aside id='sidebar' className='sidebar'>
        <ul className='sidebar-nav' id='sidebar-nav'>
          <li className='nav-item'>
            <Link className='nav-link ' to='index.html'>
              <i className='bi bi-grid'></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              className='nav-link collapsed'
              data-bs-target='#components-nav'
              data-bs-toggle='collapse'
              to='#'
            >
              <i className='bi bi-menu-button-wide'></i>
              <span>Components</span>
              <i className='bi bi-chevron-down ms-auto'></i>
            </Link>
            <ul
              id='components-nav'
              className='nav-content collapse '
              data-bs-parent='#sidebar-nav'
            >
              <li>
                <Link to='components-alerts.html'>
                  <i className='bi bi-circle'></i>
                  <span>Alerts</span>
                </Link>
              </li>
              <li>
                <Link to='components-accordion.html'>
                  <i className='bi bi-circle'></i>
                  <span>Accordion</span>
                </Link>
              </li>
              <li>
                <Link to='components-badges.html'>
                  <i className='bi bi-circle'></i>
                  <span>Badges</span>
                </Link>
              </li>
              <li>
                <Link to='components-breadcrumbs.html'>
                  <i className='bi bi-circle'></i>
                  <span>Breadcrumbs</span>
                </Link>
              </li>
              <li>
                <Link to='components-buttons.html'>
                  <i className='bi bi-circle'></i>
                  <span>Buttons</span>
                </Link>
              </li>
              <li>
                <Link to='components-cards.html'>
                  <i className='bi bi-circle'></i>
                  <span>Cards</span>
                </Link>
              </li>
              <li>
                <Link to='components-carousel.html'>
                  <i className='bi bi-circle'></i>
                  <span>Carousel</span>
                </Link>
              </li>
              <li>
                <Link to='components-list-group.html'>
                  <i className='bi bi-circle'></i>
                  <span>List group</span>
                </Link>
              </li>
              <li>
                <Link to='components-modal.html'>
                  <i className='bi bi-circle'></i>
                  <span>Modal</span>
                </Link>
              </li>
              <li>
                <Link to='components-tabs.html'>
                  <i className='bi bi-circle'></i>
                  <span>Tabs</span>
                </Link>
              </li>
              <li>
                <Link to='components-pagination.html'>
                  <i className='bi bi-circle'></i>
                  <span>Pagination</span>
                </Link>
              </li>
              <li>
                <Link to='components-progress.html'>
                  <i className='bi bi-circle'></i>
                  <span>Progress</span>
                </Link>
              </li>
              <li>
                <Link to='components-spinners.html'>
                  <i className='bi bi-circle'></i>
                  <span>Spinners</span>
                </Link>
              </li>
              <li>
                <Link to='components-tooltips.html'>
                  <i className='bi bi-circle'></i>
                  <span>Tooltips</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className='nav-item'>
            <Link
              className='nav-link collapsed'
              data-bs-target='#forms-nav'
              data-bs-toggle='collapse'
              to='#'
            >
              <i className='bi bi-journal-text'></i>
              <span>Forms</span>
              <i className='bi bi-chevron-down ms-auto'></i>
            </Link>
            <ul
              id='forms-nav'
              className='nav-content collapse '
              data-bs-parent='#sidebar-nav'
            >
              <li>
                <Link to='forms-elements.html'>
                  <i className='bi bi-circle'></i>
                  <span>Form Elements</span>
                </Link>
              </li>
              <li>
                <Link to='forms-layouts.html'>
                  <i className='bi bi-circle'></i>
                  <span>Form Layouts</span>
                </Link>
              </li>
              <li>
                <Link to='forms-editors.html'>
                  <i className='bi bi-circle'></i>
                  <span>Form Editors</span>
                </Link>
              </li>
              <li>
                <Link to='forms-validation.html'>
                  <i className='bi bi-circle'></i>
                  <span>Form Validation</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className='nav-item'>
            <Link
              className='nav-link collapsed'
              data-bs-target='#tables-nav'
              data-bs-toggle='collapse'
              to='#'
            >
              <i className='bi bi-layout-text-window-reverse'></i>
              <span>Tables</span>
              <i className='bi bi-chevron-down ms-auto'></i>
            </Link>
            <ul
              id='tables-nav'
              className='nav-content collapse '
              data-bs-parent='#sidebar-nav'
            >
              <li>
                <Link to='tables-general.html'>
                  <i className='bi bi-circle'></i>
                  <span>General Tables</span>
                </Link>
              </li>
              <li>
                <Link to='tables-data.html'>
                  <i className='bi bi-circle'></i>
                  <span>Data Tables</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className='nav-item'>
            <Link
              className='nav-link collapsed'
              data-bs-target='#charts-nav'
              data-bs-toggle='collapse'
              to='#'
            >
              <i className='bi bi-bar-chart'></i>
              <span>Charts</span>
              <i className='bi bi-chevron-down ms-auto'></i>
            </Link>
            <ul
              id='charts-nav'
              className='nav-content collapse '
              data-bs-parent='#sidebar-nav'
            >
              <li>
                <Link to='charts-chartjs.html'>
                  <i className='bi bi-circle'></i>
                  <span>Chart.js</span>
                </Link>
              </li>
              <li>
                <Link to='charts-apexcharts.html'>
                  <i className='bi bi-circle'></i>
                  <span>ApexCharts</span>
                </Link>
              </li>
              <li>
                <Link to='charts-echarts.html'>
                  <i className='bi bi-circle'></i>
                  <span>ECharts</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className='nav-item'>
            <Link
              className='nav-link collapsed'
              data-bs-target='#icons-nav'
              data-bs-toggle='collapse'
              to='#'
            >
              <i className='bi bi-gem'></i>
              <span>Icons</span>
              <i className='bi bi-chevron-down ms-auto'></i>
            </Link>
            <ul
              id='icons-nav'
              className='nav-content collapse '
              data-bs-parent='#sidebar-nav'
            >
              <li>
                <Link to='icons-bootstrap.html'>
                  <i className='bi bi-circle'></i>
                  <span>Bootstrap Icons</span>
                </Link>
              </li>
              <li>
                <Link to='icons-remix.html'>
                  <i className='bi bi-circle'></i>
                  <span>Remix Icons</span>
                </Link>
              </li>
              <li>
                <Link to='icons-boxicons.html'>
                  <i className='bi bi-circle'></i>
                  <span>Boxicons</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className='nav-heading'>Pages</li>

          <li className='nav-item'>
            <Link className='nav-link collapsed' to='users-profile.html'>
              <i className='bi bi-person'></i>
              <span>Profile</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link collapsed' to='pages-faq.html'>
              <i className='bi bi-question-circle'></i>
              <span>F.A.Q</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link collapsed' to='pages-contact.html'>
              <i className='bi bi-envelope'></i>
              <span>Contact</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link collapsed' to='pages-register.html'>
              <i className='bi bi-card-list'></i>
              <span>Register</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link collapsed' to='pages-login.html'>
              <i className='bi bi-box-arrow-in-right'></i>
              <span>Login</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link collapsed' to='pages-error-404.html'>
              <i className='bi bi-dash-circle'></i>
              <span>Error 404</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link collapsed' to='pages-blank.html'>
              <i className='bi bi-file-earmark'></i>
              <span>Blank</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Asidebar
