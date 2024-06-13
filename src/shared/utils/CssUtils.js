class CssUtils {
  static classNames(...classes) {
      return classes.filter(Boolean).join(' ');
  }
}

export default CssUtils;