import 'antd/dist/antd.css';
import { theme } from 'components/theme';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from 'redux/store';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  body {
		.ant-popover-inner {
			border-radius: 0.5rem;
			background: ${theme.hover};
		}

		.ant-popover-inner-content {
			padding: 0;

			> div {
				p {
					margin: 0;
					padding: 0.75rem;
					border-radius: 0.5rem;
					color: ${theme.navTextLight};
					font-weight: 500;
					
					&:hover {
						background: ${theme.hoverLight};
					}
				}
			}
		}

		.ant-popover-placement-top > .ant-popover-content > .ant-popover-arrow {
			border-top-color: transparent;
			border-right-color: ${theme.hover};
			border-bottom-color: ${theme.hover};
			border-left-color: transparent;
		}

		.ant-notification-hook-holder, .ant-notification-notice {
			background: ${theme.primary};
			border-radius: 0.5rem;
		}

		.ant-notification-notice-with-icon {
			.ant-notification-notice-message {
				color: ${theme.navTextLight};
			}

			.ant-notification-notice-description {
				color: ${theme.text};
			}
		}

		.ant-notification-close-icon {
			color: ${theme.text};

			&:hover {
				color: ${theme.textLight}
			}
		}
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
      <ToastContainer transition={Slide} limit={1} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
