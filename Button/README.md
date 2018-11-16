Button

按钮

### type默认default，round默认为true

![image-1](./img/basic.png)

```js
<View style={styles.container}>
        <View style={styles.rowItem}>
          <Button type={'default'}>轩邈</Button>
          <Button type={'primary'}>轩邈</Button>
          <Button type={'success'}>轩邈</Button>
          <Button type={'info'}>轩邈</Button>
          <Button type={'warning'}>轩邈</Button>
          <Button type={'danger'}>轩邈</Button>
          <Button type={'disabled'}>轩邈</Button>
        </View>
        <View style={styles.rowItem}>
          <Button type={'default'} round>轩邈</Button>
          <Button type={'primary'} round>轩邈</Button>
          <Button type={'success'} round>轩邈</Button>
          <Button type={'info'} round>轩邈</Button>
          <Button type={'warning'} round>轩邈</Button>
          <Button type={'danger'} round>轩邈</Button>
          <Button type={'disabled'} round>轩邈</Button>
        </View>
</View>
```

### disabled 默认false

![image-2](./img/disabled.png)

```js
<Button type={'info'} disabled>轩邈</Button>
```

### icon 和iconPosition 默认left (left、right)

![image-3](./img/icon.png)

```js
<Button type={'info'} icon={require('SPImg/public/back_white.png')}>轩邈</Button>
```

### loading 默认为true

![image-4](./img/loading.gif)

### size 默认值为 md  （sm 、md、lg）

![image-20181116112950621](./img/size.png)

```js
<Button size={'sm'}>轩邈</Button>
<Button>轩邈</Button>
<Button size={'lg'}>轩邈</Button>
```

