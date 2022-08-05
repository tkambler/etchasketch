import { withRouter } from './Router';
import { withTheme } from './Theme';
import { withFormContext } from './FormContext';
import { withToast } from './Toast';
import { withState } from './State';
import { compose } from 'lodash/fp';
export { useLoginState } from './State';
export { useToast } from './Toast';
import './styles.scss';
export { useFormContext } from './FormContext';

export const Setup = compose(
  withRouter,
  withState,
  withTheme,
  withFormContext,
  withToast
)((props) => props.children);
