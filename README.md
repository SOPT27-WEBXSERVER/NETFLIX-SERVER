# **27th 합동세미나**

- <b> SOPT 27th 합동세미나 
 <br>


## **📑 API 명세서**

- <a href="https://github.com/SOPT27-WEBXSERVER/SERVER/wiki"> **API 명세서 링크** </a> 
<br>


## **📙 DB ERD**
![image](https://user-images.githubusercontent.com/37949197/101240755-9dc9b080-3734-11eb-8e71-332ce259e9d7.png)

 <br>

## ✔ **models/index.js**

```jsx
db.Content = require('./content')(sequelize, Sequelize);
db.Actor = require('./actor')(sequelize, Sequelize);
db.Series = require('./series')(sequelize, Sequelize);

db.Actor.belongsTo(db.Content);
db.Series.belongsTo(db.Content);
db.Content.hasMany(db.Series, { onDelete: 'cascade' });
db.Content.hasMany(db.Actor, { onDelete: 'cascade' });
```

