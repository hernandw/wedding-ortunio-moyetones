import PropTypes from "prop-types";

const IconInfo = ({ text, icon }) => {
  return (
    <div className="mx-auto text-center">
      {icon} <h2 className="text-sm font-medium sm:text-xl ">{text}</h2>
    </div>
  );
};

IconInfo.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
}

export default IconInfo;
