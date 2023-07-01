import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/logo.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.components";
import CartDropdown from "../../components/cart-dropddown/cart-dropddown.components";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <CrownLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            <Link className="nav-link" to="/contact">
              CONTACT
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                {" "}
                SIGN OUT{" "}
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                SIGN IN
              </Link>
            )}
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
