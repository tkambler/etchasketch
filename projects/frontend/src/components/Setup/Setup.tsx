import { withRouter } from './Router';
import { withTheme } from './Theme';
import { withFormContext } from './FormContext';
import { withToast } from './Toast';
import { compose } from 'lodash/fp';
import './styles.scss';
export { useFormContext } from './FormContext';

export const Setup = compose(
  withRouter,
  withTheme,
  withFormContext,
  withToast
)((props) => props.children);
