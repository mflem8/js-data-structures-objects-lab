const driver = {
    name: 'Sam',
    address: '11 Broadway'
};

const newDriver = {
    name: 'Fred'
};

const updateDriverWithKeyAndValue = (obj, key, value) => {
    return Object.assign({}, obj, { [key]: value });
};

const destructivelyUpdateDriverWithKeyAndValue = (obj, key, value) => {
    obj[key] = value;
    return obj;
};

const deleteFromDriverByKey = (driver, key) => {
    const newDriver = Object.assign({}, driver, key);
    delete newDriver[key];
    return newDriver;
};

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    const newDriver = Object.assign(driver, key);
    delete newDriver.name;
    return newDriver;
};
