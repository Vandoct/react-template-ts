import 'antd/dist/antd.css';
import { theme } from 'components/theme';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'redux/store';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  body {
		.ant-popover-title {
			padding: 0.5rem;
			color: ${theme.navTextLight};
			font-weight: 700;
			font-size: 1rem;
			border-bottom: 1px solid ${theme.text};
		}

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
					cursor: pointer;
					user-select: none;
					
					&:hover {
						background: ${theme.hoverLight};
					}
				}
			}
		}

		.ant-popover-placement-bottomRight > .ant-popover-content > .ant-popover-arrow {
			border-top-color: ${theme.hover};
			border-right-color: transparent;
			border-bottom-color: transparent;
			border-left-color: ${theme.hover};
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
		
		.ant-modal-body {
			padding: 4rem 2rem 2rem 2rem;
		}

		.ant-modal-content {
			background: ${theme.primary};
			border-radius: 0.5rem;
		}

		.ant-modal-close {
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
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
