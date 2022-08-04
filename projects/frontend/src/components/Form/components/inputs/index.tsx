import TextInput from './text';
import RenderInput from './render';
import CustomInput from './custom';
import PasswordInput from './password';
import SelectInput from './select';
import TextArea from './textarea';

export default {
  custom: CustomInput,
  text: TextInput,
  password: PasswordInput,
  select: SelectInput,
  textarea: TextArea,
  render: RenderInput,
};
