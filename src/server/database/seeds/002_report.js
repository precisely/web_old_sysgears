exports.seed = async function(knex) {
  // Create gene panel reports
  await knex('report').del();
  await knex('report').insert([
    { id: 5, title: 'ME/CFS', content: MECFS_REPORT, traits: '["gene:mthfr", "gene:grik3"]' },
    {
      id: 6,
      title: 'Mitochondria',
      content: MITOCHONDRIA_REPORT,
      traits: '["gene:mt-cyb", "gene:my-te", "mt-tv", "mt-th"]'
    }
  ]);

  // Create gene reports
  await knex('report').del();
  await knex('report').insert([
    { id: 7, title: 'Methylene Dihydrofolate Reductase', content: 'MTHFR content', traits: '["gene:mthfr"]' },
    { id: 8, title: 'Glutamate Receptor, Ionotropic, Kainate', content: 'GRIK3 content', traits: '["gene:grik3"]' }
  ]);

  // Create user traits
  // Eventually, this should move to a separate DB, with an opaque identifier
  // instead of the identifier
  await knex('user_trait').del();
  await knex('user_trait').insert([
    { id: 10, user_id: 1, trait: 'gene:mthfr', value: 'c677t (t;t)' },
    { id: 11, user_id: 1, trait: 'gene:mthfr', value: 'c677t (t;t)' },
    { id: 12, user_id: 2, trait: 'gene:grik3', value: 'c677t (c;t)' }
  ]);
};

const MECFS_REPORT = `
<Report title="ME/CFS">
  <LeftColumn>
    <BodyView
      head=5
      torso=3
      delta=5
    />
  </LeftColumn>
  <RightColumn>
  </RightColumn>
</Report>`;

const MITOCHONDRIA_REPORT = `
<Report title="ME/CFS">
  <UserHighlight>
  </UserHighlight>
  <RightColumn>
  </RightColumn>
  <LeftColumn>
  </LeftColumn>
</Report>`;
