import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
      <div className={css.wrap}>
        <p>Developer: Serhii</p>
        <p>
          Contact us:{' '}
          <a href="mailto:Dezmontmayals@gmail.com">
            Dezmontmayals@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;