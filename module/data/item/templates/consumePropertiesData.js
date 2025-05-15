import itemEffect from './itemEffectData.js';

const fields = foundry.data.fields;

export default function consumeProperties() {
    return {
        doesHeal: new fields.BooleanField({ initial: false, label: 'WITCHER.Item.ConsumeProperties.doesHeal' }),
        heal: new fields.StringField({ initial: '', label: 'WITCHER.Item.ConsumeProperties.heal' }),

        effects: new fields.ArrayField(new fields.SchemaField(itemEffect())),
        removesEffects: new fields.ArrayField(new fields.SchemaField(itemEffect()))
    };
}
