import React from 'react';
import { connect } from 'dva';
import { Button, Input, Layout, List } from 'antd';
import styles from './Vocabulary.css';

const { Content } = Layout;

class Vocabulary extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.dispatch = props.dispatch;
    this.state = {
      item: '',
    };
  }
  render() {
		const props = this.props;

		return (

			<Layout className={styles.layout}>
				<h4>代表詞</h4>
				<Content>
					<Input
						value={this.state.item}
						placeholder="同義詞設定"
						onChange={(e) => { this.setState({ item: e.target.value }); }}
					 />
					<Button
						type="primary"
						icon="plus"
						disabled={this.state.item === ''}
						onClick={() => {
							props.dispatch({ type: 'example/add', item: { name: this.state.item, status: false } });
							this.setState({ item: '' });
						}}
				  >新增</Button>
					<List
						className={styles.list}
						bordered
						dataSource={props.list}
							renderItem={(item, index) => (
								<List.Item>
								{item.name}
								<Button
									className={styles.btndel}
									type="danger" size="small" shape="circle" icon="cross"
									onClick={() => {
										props.dispatch({ type: 'example/delete', index });
									}}
								/>
							  </List.Item>
							)}
					/>
				</Content>
			</Layout >
		);
	}
}

function mapStateToProps(state) {
  return {
    list: state.example.list,
  };
}

export default connect(mapStateToProps)(Vocabulary);
