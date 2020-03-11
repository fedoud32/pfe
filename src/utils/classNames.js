function classNames(...args) {
    const classes = args
      .reduce((result, current) => {
        if (!current) return result;
        if (typeof current === 'string') return [...result, current];
        const keys = Object.keys(current);
        const values = keys.map((row) => current[row]);
        return [...result, classNames(...values)];
      }, [])
      .filter((e) => e);
  
    return classes.join(' ');
  }
  
  export default classNames;