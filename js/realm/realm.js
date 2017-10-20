import Realm from 'realm';

class Mood extends Realm.Object {}
Mood.schema = {
    name: 'Mood',
    primaryKey: 'dateKey',
    properties: {
        value: 'int',
        creationDate: 'date',
        dateKey: 'string',
    },
};

export default new Realm({schema: [Mood]});
