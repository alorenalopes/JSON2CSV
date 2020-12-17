function conversion_csv(objects) {
  let result = '';
  let properties;

  if (Array.isArray(objects)) {
    properties = Object.getOwnPropertyNames(objects[1]);
    result += `${properties}\n`;
    objects.forEach(object => {
      properties.forEach(key => {
        result += `${object[key]},`;
      });
      result += '\n';
    });
    return result.replace(/,\n/g, '\n');
  }
  properties = Object.getOwnPropertyNames(objects);
  result += `${properties}\n`;
  properties.forEach(key => {
    result += `${objects[key]},`;
  });
  result += '\n';
  return result.replace(/,\n/g, '\n');
}

export default function conversion(json) {
  try {
    const json_code = JSON.parse(json);
    return conversion_csv(json_code);
  } catch (err) {
    return false;
  }
}
