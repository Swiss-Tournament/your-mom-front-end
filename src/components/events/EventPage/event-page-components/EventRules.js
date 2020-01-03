import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const EventRules = (props, status) => {
	const [eventFormat, setEventFormat] = useState({});

	const eventFormats = [
		{
			format: 'Standard',
			sets:
				'Throne of Eldrain, Core Set 2020, War of the Spark, Ravnica Allegiance, Guildf of Ravnica',
			banned:
				'Revised: November 18, 2019. Field of the Dead, Oko, Thief of Crowns, Once Upon a Time, Veil of Summer',
			deckRules: `Your deck must be at least 60 cards. Up to fifteen cards may be included in your sideboard, if you use one. Include no more than four copies of any individual card in your main deck and sideboard combined (except basic lands). There's no maximum deck size, as long as you can shuffle your deck in your hands unassisted.`
		},
		{
			format: 'Modern',
			sets: `All standard releases from Eighth Edition forward`,
			banned: `Ancient Den, Birthing Pod, Blazing Shoal, Bridge From Below, Chrome Mox, Cloudpost, Dark Depths, Deathrite Shaman, Dig Through Time, Dread Return, Eye of Ugin, Faithless Looting, Gitaxian Probe, Glimpse of Nature, Golgari Grave-Troll, Great Furnace, Green Sun's Zenith, Hogaak, Arisen Necropolis, Hypergenesis, Krark-Clan Ironworks, Mental Misstep, Ponder, Preordain, Punishing Fire, Rite of Flame, Seat of the Synod, Second Sunrise, Seething Song, Sensei's Diving Top, Skullclamp, Splinter Twin, Summer Bloom, Treasure Cruise, Tree of Tales, Umezawa's Jitte, Vault of Whispers`,
			deckRules: `Your deck must be at least 60 cards. Up to fifteen cards may be included in your sideboard, if you use one. Include no more than four copies of any individual card in your main deck and sideboard combined (except basic lands). There's no maximum deck size, as long as you can shuffle your deck in your hands unassisted.`
		},
		{
			format: 'Legacy',
			sets: 'All Magic: the Gathering releases',
			banned: `25 cards with the Card Type "Consiracy", 9 cards that reference "playing for ante", Ancestral Recall, Balance, Bazaar of Baghdad, Black Lotus, Channel, Chaos Orb, Deathrite Shaman, Demonic Consultation, Demonic Tutor, Dig Through Time, Earthcraft, Falling Star, Fastbond, Flash, Frantic Search, Gitaxian Probe, Goblin Recruiter, Gush, Hermit Druid, Imperial Seal, Library of Alexandria, Mana Crypt, Mana Drain, Mana Vault, Memory Jar, Mental Misstep, Mind Twist, Mind's Desire, Mishra's Workshop, Mox Emerald, Mox Jet, Mox Pearl, Mox Ruby, Mox Sapphire, Mystical Tutor, Necropotence, Oath of Druids, Sensei's Divining Top, Shahrazad, Skullclamp, Sol Ring, Strip Mine, Survival of the Fittest, Time Vault, Time Walk, Timetwister, Tinker, Tolarian Academy, Treasure Cruise, Vampiric Tutor, Wheel of Fortune, Windfall, Wrenn and Six, Yawgmoth's Bargain, Yawgmoth's Will`,
			deckRules: `Your deck must be at least 60 cards. Up to fifteen cards may be included in your sideboard, if you use one. Include no more than four copies of any individual card in your main deck and sideboard combined (except basic lands). There's no maximum deck size, as long as you can shuffle your deck in your hands unassisted.`
		},
		{
			format: 'Vintage',
			sets: 'All Magic: the Gathering releases',
			banned: `25 cards with the Card Type "Consiracy", 9 cards that reference "playing for ante", Chaos Orb, Falling Star, Shahrazad. The following cards are restricted: Ancestral Recall, Balance, Black Lotus, Brainstorm,Chalice of the Void, Channel, Demonic Consultation, Demonic Tutor, Dig Through Time, Flash, Golgari Grave-Troll, Gush, Imperial Seal, Karn, the Great Creator, Library of Alexandria, Lion's Eye Diamond, Lodestone Golem, Lotus Petal, Mana Crypt, Mana Vault, Memory Jar, Mental Misstep, Merchant Scroll, Mind's Desire, Monastery Mentor, Mox Emerald, Mox Jet, Mox Pearl, Mox Ruby, Mox Sapphire, Mystic Forge, Mystical Tutor, Narset, Parter of Veils, Necropotence, Ponder, Sol Ring, Strip Mine, Thorn of Amethyst,  Time Vault, Time Walk, Timetwister, Tinker, Tolarian Academy, Treasure Cruise, Trinisphere, Vampiric Tutor, Wheel of Fortune, Windfall, Yawgmoth's Will`,
			deckRules: `Your deck must be at least 60 cards. Up to fifteen cards may be included in your sideboard, if you use one. Include no more than four copies of any individual card in your main deck and sideboard combined (except basic lands). There's no maximum deck size, as long as you can shuffle your deck in your hands unassisted.`
		},
		{
			format: 'Block',
			sets: `All cards must come from a singular block`,
			banned: `Intangible Virtue, Lingering Souls, Aether Vial, Ancient Den, Arcbound Ravager, Darksteel Citadel, Disciple of the Vault, Great Furance, Seat of the Synod, Tree of Tales, Vault of Whispers, Skullclamp, Lin Sivvi, Defiant Hero, Rishadan Port, Gaea's Cradle, Memory Jar, Serra's Sanctum, Time Spiral, Tolarian Academy, Voltaic Key, Windfall, Cursed Scroll, Squandered Resources, Amulet of Quoz, Thawing Glaciers, Zuran Orb`,
			deckRules: `Your deck must be at least 60 cards. Up to fifteen cards may be included in your sideboard, if you use one. Include no more than four copies of any individual card in your main deck and sideboard combined (except basic lands). There's no maximum deck size, as long as you can shuffle your deck in your hands unassisted.`
		},
		{
			format: 'Pauper',
			sets: 'All Magic: the Gathering releases',
			banned: `Arcum's Astrolabe, Cloud of Faeries, Cloudpost, Cranial Plating, Daze, Empty the Warrens, Frantic Search, Gitaxian Probe, Grapeshot, Gush, Invigorate, Peregrine Drake, Temporal Fissure, Treasure Cruise, High Tide, Hymn to Tourach, Sinkhole`,
			deckRules: `Your deck must be at least 60 cards that must all be of the common rarity. Up to fifteen cards may be included in your sideboard, if you use one. Include no more than four copies of any individual card in your main deck and sideboard combined (except basic lands). There's no maximum deck size, as long as you can shuffle your deck in your hands unassisted.`
		},
		{
			format: 'Pioneer',
			sets: `All standard releases from Return to Ravnica forward`,
			banned: 'None',
			deckRules: `Your deck must be at least 60 cards. Up to fifteen cards may be included in your sideboard, if you use one. Include no more than four copies of any individual card in your main deck and sideboard combined (except basic lands). There's no maximum deck size, as long as you can shuffle your deck in your hands unassisted.`
		}
	];

	useEffect(() => {
		eventFormats.map(item => {
			if (props.format === item.format) {
				setEventFormat(item);
			}
		});
	}, []);

	return (
		<RulesWrapper>
			<h1>Event Deck Construction Rules</h1>
			<DataWrapper>
				<Paragraph>
					Format: {eventFormat.format}
				</Paragraph>
				<Paragraph>
					Legal Sets: {eventFormat.sets}
				</Paragraph>
				<Paragraph>
					Banned/Restricted Cards: {eventFormat.banned}
				</Paragraph>
				<Paragraph>
					Deck Construction Rules: {eventFormat.deckRules}
				</Paragraph>
			</DataWrapper>
		</RulesWrapper>
	);
};

export default EventRules;

const RulesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border: 2px solid black;
	width: 95%;
	min-height: 40vh;
	height: 100%;
	margin: 1% auto;
	padding: 2%;
`

const DataWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 1% auto;
	width: 95%;
`

const Paragraph = styled.p`
  font-size: 1.6rem;
  margin: 1% auto;
  padding: none;
`;