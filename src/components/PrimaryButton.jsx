import { Send } from '@mui/icons-material';
import { Button } from '@mui/joy';
import PropTypes from 'prop-types';

export default function PrimaryButton({ label, variant, size, disabled }) {
  return (
    <Button
      type="submit"
      variant={variant ?? 'solid'} // outlined ou solid
      size={size ?? 'md'} // sm, md, lg
      disabled={disabled}
      startDecorator={<Send />}
    >
      { label }
    </Button>
  );
}

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['outlined', 'solid']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
};
