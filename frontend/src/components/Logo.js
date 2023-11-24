import Link from 'next/link';
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
      .logo {
        max-width: 7.5vh;
        max-height: 7.5vh;
      }
      .logo-text {
        font-size: 2.5vh;
        color: grey;
        font-weight: 300;
        padding: 5px 2px;
        margin: 0 10px;
        text-decoration: none;
      }
      @media screen and (max-width: 1024px) {
        .logo {
          max-width: 3.5vh;
          max-height: 3.5vh;
        }
        .logo-text {
          font-size: 2vh;
          color: #999999;
          font-weight: 300;
          padding: 0.5vh 0.25vh;
          // margin: 0 10vh;
          text-decoration: none;
        }
      }
      `}</style>
    </Stack>
);

export default Logo;
