// const dbRef0a = ref(realtimeDatabase, 'dnd/kralumin/spell_known/lv_0/mage_hand')
// set(dbRef0a,{
//     "spellName": "Mage Hand",
//     "source": "Player's Handbook",
//     "description": "<p>A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than {30} away from you or if you cast this spell again. You can use your action to control the hand. You can use the hand to <b>manipulate</b> an object, <b>open</b> an unlocked door or container, <b>stow</b> or <b>retrieve</b> an item from an open container, or <b>pour</b> the contents out of a vial. You can move the hand up to {30} each time you use it.The hand can’t attack, activate magical items, or carry more than 10 pounds.</p>",
//     "dice": "none",
//     "duration": "1 minute",
//     "components": {
//         "v": true,
//         "s": true,
//         "c": false
//     },
//     "range": 30,
//     "rangeType": "",
//     "castingTime": "1 action",
//     "minLevel": 0
// })
// const dbRef0b = ref(realtimeDatabase, 'dnd/kralumin/spell_known/lv_0/true_strike')
// set(dbRef0b,{
//     "spellName": "True Strike",
//     "source": "Player's Handbook",
//     "description": "<p>You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target’s defenses. On your next turn, you gain <b>advantage</b> on your first attack roll against the target, provided that this spell hasn’t ended.</p>",
//     "dice": "none",
//     "duration": "Concentration, 1 round",
//     "components": {
//         "v": false,
//         "s": true,
//         "c": false
//     },
//     "range": 30,
//     "rangeType": "",
//     "castingTime": "1 action",
//     "minLevel": 0
// })
// const dbRef0c = ref(realtimeDatabase, 'dnd/kralumin/spell_known/lv_0/vicious_mockery')
// set(dbRef0c,{
//     "spellName": "Vicious Mockery",
//     "source": "Player's Handbook",
//     "description": "<p>You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a <b>Wisdom</b> saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.</p>",
//     "dice": {
//         "1": "1d4",
//         "2": "1d4",
//         "3": "2d4",
//         "4": "2d4",
//         "5": "3d4",
//         "6": "3d4",
//         "7": "4d4",
//         "8": "4d4",
//         "9": "4d4",
//     },
//     "duration": "instantaneous",
//     "components": {
//         "v": true,
//         "s": false,
//         "c": false
//     },
//     "range": 60,
//     "rangeType": "",
//     "castingTime": "1 action",
//     "minLevel": 0
// })
// const dbRef1a = ref(realtimeDatabase, 'dnd/kralumin/spell_known/lv_1/charm_person')
// set(dbRef1a,{
//     "spellName": "Charm Person",
//     "source": "Player's Handbook",
//     "description": "<p>You attempt to charm a humanoid you can see within range. It must make a <b>Wisdom</b> saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is <b>charmed</b> by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a <b>friendly</b> acquaintance. When the spell ends, the creature knows it was charmed by you. <b>At Higher Levels</b> When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within {30} of each other when you target them.</p>",
//     "dice": "none",
//     "duration": "1 hour",
//     "components": {
//         "v": true,
//         "s": true,
//         "c": false
//     },
//     "range": 30,
//     "rangeType": "",
//     "castingTime": "1 action",
//     "minLevel": 1
// })
// const dbRef1b = ref(realtimeDatabase, 'dnd/kralumin/spell_known/lv_1/tasha_hideous_laughter')
// set(dbRef1b,{
//     "spellName": "Tasha's Hideous Laughter",
//     "source": "Player's Handbook",
//     "description": "<p>A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a <b>Wisdom</b> saving throw or <b>fall prone, becoming incapacitated and unable to stand up for the duration</b>. A creature with an <b>Intelligence score of 4 or less</b> isn’t affected. At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw if it’s triggered by damage. On a success, the spell ends.</p>",
//     "dice": "none",
//     "duration": "concentration, 1 minute",
//     "components": {
//         "v": true,
//         "s": true,
//         "c": true
//     },
//     "range": 30,
//     "rangeType": "",
//     "castingTime": "1 action",
//     "minLevel": 1
// })
// const dbRef1c = ref(realtimeDatabase, 'dnd/kralumin/spell_known/lv_1/thunderwave')
// set(dbRef1c,{
//     "spellName": "Thunderwave",
//     "source": "Player's Handbook",
//     "description": "<p>A wave of thunderous force sweeps out from you. Each creature in a {15} cube originating from you must make a <b>Constitution</b> saving throw. On a failed save, a creature takes 2d8 <b>thunder</b> damage and is <b>pushed</b> {10} away from you. On a successful save, the creature takes half as much damage and isn’t pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed {10} away from you by the spell’s effect, and the spell emits a thunderous boom <b>audible out to {300}</b></p>",
//     "dice": {
//         "1": "1d8",
//         "2": "2d8",
//         "3": "3d8",
//         "4": "4d8",
//         "5": "5d8",
//         "6": "6d8",
//         "7": "7d8",
//         "8": "8d8",
//         "9": "9d8",
//     },
//     "duration": "instantaneous",
//     "components": {
//         "v": true,
//         "s": true,
//         "c": false
//     },
//     "range": 15,
//     "rangeType": ", cube, self",
//     "castingTime": "1 action",
//     "minLevel": 1
// })
// const dbRef2a = ref(realtimeDatabase, 'dnd/kralumin/spell_known/lv_2/invisibility')
// set(dbRef2a,{
//     "spellName": "Invisibility",
//     "source": "Player's Handbook",
//     "description": "<p></p>A creature you touch becomes <b>invisible</b> until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target’s person. The spell ends for a target that attacks or casts a spell. </p><p><b>At Higher Levels</b> When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.</p>",
//     "dice": "none",
//     "duration": "concentration, 1 hour",
//     "components": {
//         "v": true,
//         "s": true,
//         "c": true
//     },
//     "range": 0,
//     "rangeType": "touch",
//     "castingTime": "1 action",
//     "minLevel": 2
// })
// const dbRef2b = ref(realtimeDatabase, 'dnd/kralumin/spell_known/lv_2/pyrotechnics')
// set(dbRef2b,{
//     "spellName": "Pyrotechnics",
//     "source": "Xanathar's Guide to Everything",
//     "description": "<p>Choose an area of flame that you can see and that can fit within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke.</p><p><b>Fireworks:</b> The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn.</p><p><b>Smoke:</b> Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it.</p>",
//     "dice": "none",
//     "duration": "instantaneous",
//     "components": {
//         "v": true,
//         "s": true,
//         "c": false
//     },
//     "range": 60,
//     "rangeType": "",
//     "castingTime": "1 action",
//     "minLevel": 2
// })
// const dbRef2c = ref(realtimeDatabase, 'dnd/kralumin/spell_known/lv_2/shatter')
// set(dbRef2c,{
//     "spellName": "Shatter",
//     "source": "Player's Handbook",
//     "description": "<p>A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a {10} sphere centered on that point must make a <b>Constitution</b> saving throw. A creature takes 3d8 <b>thunder</b> damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw. A nonmagical object that isn’t being worn or carried also takes the damage if it’s in the spell’s area.</p>",
//     "dice": {
//         "1": "0",
//         "2": "2d8",
//         "3": "3d8",
//         "4": "4d8",
//         "5": "5d8",
//         "6": "6d8",
//         "7": "7d8",
//         "8": "8d8",
//         "9": "9d8",
//     },
//     "duration": "instantaneous",
//     "components": {
//         "v": true,
//         "s": true,
//         "c": true
//     },
//     "range": 60,
//     "rangeType": ", sphere",
//     "castingTime": "1 action",
//     "minLevel": 2
// })
// const dbRef2d = ref(realtimeDatabase, 'dnd/kralumin/spell_known/lv_2/shadow_blade')
// set(dbRef2d,{
//     "spellName": "Shadow Blade",
//     "source": "Xanathar's Guide to Everything",
//     "description": "<p>You weave together threads of shadow to create a sword of solidified gloom in your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are <b>proficient</b>. It deals 2d8 <b>psychic</b> damage on a hit and has the <b>finesse</b>,<b>light</b>, and <b>thrown(range 20/60)</b> properties. In addition, when you use the sword to attack a target that is in <b>dim light</b> or <b>darkness</b>, you make the attack roll with <b>advantage</b>.</p><p>If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a <b>bonus action to cause the sword to reappear</b> in your hand.</p>",
//     "dice": {
//         "1": "0",
//         "2": "2d8",
//         "3": "3d8",
//         "4": "3d8",
//         "5": "4d8",
//         "6": "4d8",
//         "7": "5d8",
//         "8": "5d8",
//         "9": "5d8",
//     },
//     "duration": "concentration, 1 minute",
//     "components": {
//         "v": true,
//         "s": true,
//         "c": false
//     },
//     "range": 0,
//     "rangeType": "self",
//     "castingTime": "1 bonus action",
//     "minLevel": 2
// })
// const dbRef3a = ref(realtimeDatabase, 'dnd/kralumin/spell_known/lv_3/bestow_curse')
// set(dbRef3a, {
//     "spellName": "Bestow Curse",
//     "source": "Player's Handbook",
//     "description": "<p>You touch a creature, and that creature must succeed on a <b>Wisdom</b> saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options: </p><p>Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score.</p><p>While cursed, the target has disadvantage on attack rolls against you.</p><p>While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing.</p><p>While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target.</p><p>A <b>remove curse</b> spell ends this effect. At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect.At Higher Levels. If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration.</p>",
//     "dice": "none",
//     "duration": "concentration, 1 minute",
//     "components": {
//         "v": true,
//         "s": true,
//         "c": false,
//     },
//     "range": 0,
//     "rangeType": "touch",
//     "castingTime": "1 action",
//     "minLevel": 3
// })
// const dbRef3b = ref(realtimeDatabase, 'dnd/kralumin/spell_known/lv_3/fear')
// set(dbRef3b,{
//     "spellName": "Fear",
//     "source": "Player's Handbook",
//     "description": "<p>You project a phantasmal image of a creature’s worst fears. Each creature in a {30} cone must succeed on a <b>Wisdom</b> saving throw or <b>drop</b> whatever it is holding and become <b>frightened</b> for the duration.</p><p>While frightened by this spell, a creature must take the <b>Dash</b> action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesn’t have line of sight to you, the creature can make a Wisdom saving throw. On a successful save, the spell ends for that creature.</p>",
//     "dice": "none",
//     "duration": "concentration, 1 minute",
//     "components": {
//         "v": true,
//         "s": true,
//         "c": true,
//     },
//     "range": 30,
//     "rangeType": ", cone, self",
//     "castingTime": "1 action",
//     "minLevel": 3
// })
// const dbRef3c = ref(realtimeDatabase, 'dnd/kralumin/spell_known/lv_3/major_image')
// set(dbRef3c,{
//     "spellName": "Major Image",
//     "source": "Player's Handbook",
//     "description": "<p>You create the image of an object, a creature, or some other visible phenomenon that is no larger than a {20} cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can’t create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte’s stench).</p><p>As long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example.</p><p>Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature.</p><p><b>At Higher Levels:</b> When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration. In this form it is sometimes considered a different spell, known as Permanent Image</p>",
//     "dice": "none",
//     "duration": "concentration, 10 minute",
//     "components": {
//         "v": true,
//         "s": true,
//         "c": true,
//     },
//     "range": 120,
//     "rangeType": "",
//     "castingTime": "1 action",
//     "minLevel": 3
// })
// const dbRef3d = ref(realtimeDatabase, 'dnd/kralumin/spell_known/lv_3/thunder_step')
// set(dbRef3d,{
//     "spellName": "Thunder Step",
//     "source": "Xanathar's Guide to Everything",
//     "description": "<p>You <b>teleport</b> yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within <b>{10}</b> of the space you left must make a <b>constitution</b> saving throw, taking <b>3d10 thunder damage</b> on a failed save, or half as much damage on a successful one. The thunder can be heard from up to<b> {300} </b>away. </p><p>You can bring along objects as long as their weight doesn’t exceed what you can carry. You can also teleport one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within {5} of you when you cast this spell, and there must be an unoccupied space within {5} of your destination space for the creature to appear in; otherwise, the creature is left behind.</p>",
//     "dice": {
//         "1": "0",
//         "2": "0",
//         "3": "3d10",
//         "4": "4d10",
//         "5": "5d10",
//         "6": "6d10",
//         "7": "7d10",
//         "8": "8d10",
//         "9": "9d10",
//     },
//     "duration": "istantaneous",
//     "components": {
//         "v": true,
//         "s": false,
//         "c": false,
//     },
//     "range": 90,
//     "rangeType": ", self",
//     "castingTime": "1 action",
//     "minLevel": 3
// })