import { Link } from 'react-router-dom';
import { GreetCont } from './styled';
import { useSelector } from 'react-redux';
import { userSelector } from 'redux/auth/selectors';

const Home = () => {

  const user = useSelector(userSelector);

  return (
    <GreetCont
      className="p-2 mt-5 d-flex mx-auto"
      style={{ maxWidth: '1000px' }}
    >
      <div>
        <h2 className="card-title">About the site</h2>
        <p className="mt-2 fs-5">
          Do you still use a paper phone book to write down the numbers of
          friends and acquaintances? This site was created especially for you,
          where all your recorded contacts will be stored. If suddenly you are
          not near your device, but you urgently need to know the desired
          contact, just enter through any other device and log in to your
          account. All data will be waiting for you there! Try it and you'll
          never go back to paper phone books again.
          {user ? (
            <>
              As you are already logged into the account, quickly go to the
              <Link to="/phonebook" className="p-1 fs-5">
                phone book.
              </Link>
            </>
          ) : (
            <>
              Just
              <Link to="/registration" className="p-1 fs-5">
                register
              </Link>
              and start creating contacts, or
              <Link to="/login" className="p-1 fs-5">
                login
              </Link>
              if you already have an account.
            </>
          )}
        </p>
      </div>
      <img
        src={require('./PhonebookX.jpg')}
        alt="Phonebook"
        width="50%"
        className="rounded border border-2"
      />
    </GreetCont>
  );
};

export default Home;