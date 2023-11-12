import Link from 'next/link';
// import { IconButton, h5 } from 'ui-neumorphism';
import MainLogo from 'next/image';
import { Stack } from 'react-bootstrap';


const Logo = () => (
    <Stack className="stack" direction="horizontal" gap={2}>
      <Link href="/">
          <MainLogo className="logo" src="/favicon.png" alt="logo" width="36" height="36" />          
      </Link>
      <Link href="/">
        <div className="logo-text">TIDINGS</div>
      </Link>
      
      <style>{`
      .stack {
        margin: 5px 0 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
      }
      .logo-text {
        font-size: 22px;
        color: #999999;
        font-weight: 300;
        padding: 5px 2px;
        margin: 0 10px;
        text-decoration: none;
      }
      `}</style>
    </Stack>
);

export default Logo;
