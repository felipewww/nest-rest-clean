function create() {
    const data = [
        {
            id: 1,
            name: 'Ciência de dados',
            course_kind_id: 1,
            course_level_id: 3,
            course_shift_id: 1,
        },
        {
            id: 2,
            name: 'Sistemas de informação',
            course_kind_id: 3,
            course_level_id: 1,
            course_shift_id: 2,
        },
        {
            id: 3,
            name: 'Análise e desenvolvimento de sistemas',
            course_kind_id: 1,
            course_level_id: 1,
            course_shift_id: 3,
        },
        {
            id: 4,
            name: 'Propaganda e Marketing',
            course_kind_id: 1,
            course_level_id: 1,
            course_shift_id: 4,
        },
        {
            id: 5,
            name: 'Publicidade e Propaganda',
            course_kind_id: 1,
            course_level_id: 4,
            course_shift_id: 1,
        },
        {
            id: 6,
            name: 'Psicologia',
            course_kind_id: 2,
            course_level_id: 4,
            course_shift_id: 2,
        },
        {
            id: 7,
            name: 'Direito',
            course_kind_id: 2,
            course_level_id: 1,
            course_shift_id: 3,
        },
        {
            id: 8,
            name: 'Big Data',
            course_kind_id: 1,
            course_level_id: 7,
            course_shift_id: 4,
        },
        {
            id: 9,
            name: 'Machine Learning',
            course_kind_id: 1,
            course_level_id: 7,
            course_shift_id: 1,
        },
        {
            id: 10,
            name: 'Hacker Ético',
            course_kind_id: 3,
            course_level_id: 3,
            course_shift_id: 1,
        },
    ]

    return data;
}

module.exports = {
    data: create()
}
