const Sequelize = require('sequelize');
const config = require('./config');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

// 我们把通过sequelize.define()返回的Pet称为Model，它表示一个数据模型。
var Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
        timestamps: false
});

// 数据库中塞一些数据
(async () => {
    var now = Date.now();
    var dog = await Pet.create({
        id: 'd-' + now,
        name: 'Odie',
        gender: false,
        birth: '2008-08-08',
        createdAt: now,
        updatedAt: now,
        version: 0
    });
    console.log('created: ' + JSON.stringify(dog));
})();

// 查询数据
// (async () => {
//     var p = await queryFromSomewhere();
//     p.gender = true;
//     p.updatedAt = Date.now();
//     p.version ++;
//     await p.save();
// })();


// 删除数据
// (async () => {
//     var p = await queryFromSomewhere();
//     await p.destroy();
// })();


// 所以，使用Sequelize操作数据库的一般步骤就是：

// 首先，通过某个Model对象的findAll()方法获取实例；

// 如果要更新实例，先对实例属性赋新值，再调用save()方法；

// 如果要删除实例，直接调用destroy()方法。

// 注意findAll()方法可以接收where、order这些参数，这和将要生成的SQL语句是对应的。