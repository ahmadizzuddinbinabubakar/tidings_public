const Footer = () => (
    <div className="footer-wrapper">
      <div className="copyright">© {new Date().getFullYear()} IzzuTech.</div>
      <style>{`
      .footer-wrapper {
        text-align: center;
        // margin-top: 80px;
        padding: 10px 30px;
        color: grey;
        font-family: 'Helvetica', 'Arial', sans-serif;
        background-color: white;
      }
      .copyright {
        margin-bottom: 20px;
      }
    `}</style>
    </div>
  );
  
  export default Footer;
  