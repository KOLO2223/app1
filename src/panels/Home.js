import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

<Title level="2" style={{ marginBottom: 16 }}>
    Заголовок 
  </Title>

  
  <div style={{ padding: 20 }}>
  <Text>Дополнительный текст</Text>
</div>


<input type="radio" />


<View activePanel="panel">
  <Panel id="panel">
    <PanelHeader>Radio</PanelHeader>
    <Group>
      <FormLayout>
        <FormItem top="Откуда списать">
          <Radio
            name="radio"
            value="1"
            description="Баланс 7 320 ₽"
            defaultChecked
          >
            VK Pay
          </Radio>
          <Radio name="radio" value="2">
            Mastercard **** 1234
          </Radio>
          <Radio name="radio" value="3" description="Заблокирована" disabled>
            Visa **** 4321
          </Radio>
        </FormItem>
      </FormLayout>
    </Group>
  </Panel>
</View>


// Баннер начало
const promoBannerProps = {
	title: "Заголовок",
	domain: "vk.com",
	trackingLink: "https://vk.com",
	ctaText: "Перейти",
	advertisingLabel: "Реклама",
	iconLink:
	  "https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg",
	description: "Описание рекламы",
	ageRestrictions: "14+",
	statistics: [
	  { url: "", type: "playbackStarted" },
	  { url: "", type: "click" },
	],
  };
  
  <View activePanel="promo">
	<Panel id="promo">
	  <FixedLayout vertical="bottom">
		<PromoBanner bannerData={promoBannerProps} />
	  </FixedLayout>
	</Panel>
  </View>;

// Баннер конец

export default Home;
