import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Nav, Navbar, NavbarProps } from 'react-bootstrap';
import './NavBar.scss';
import { smoothScroll } from './utils';

const NavBar = () => {
  const [variant, setVariant] = useState<NavbarProps['variant']>('dark');

  useEffect(() => {
    setTimeout(() => {
      const navbar = document.querySelector('.navbar') as HTMLElement;

      const $body: any = $(globalThis.document.body);

      if (!navbar) return;

      // Change nav style for load and top
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > navbar.offsetHeight) {
          setVariant('light');
        } else {
          setVariant('dark');
        }
      });

      // Auto-advance menu
      $body.scrollspy({
        target: '.navbar.fixed-top',
        offset: navbar.offsetHeight + 50,
      });
    }, 1000);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      role="navigation"
      variant={variant}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand
        href="https://github.com/jakeboone02"
        target="_blank"
        className="ml-3 mt-2"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" defaultActiveKey="#home">
          <Nav.Link href="#home" onClick={(e: any) => smoothScroll(e, 'home')}>
            Home
          </Nav.Link>
          <Nav.Link
            href="#about"
            onClick={(e: any) => smoothScroll(e, 'about')}
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
