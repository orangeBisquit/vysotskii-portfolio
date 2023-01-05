import "./ProjectForm.scss";
import { useSelector, useDispatch } from 'react-redux'
import { setProjectsType, setSort } from '../../store/slices/formSlice'
import { useState } from "react";
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { Tooltip } from 'primereact/tooltip';

const sortOptions = [
  { label: 'new first', value: 'new-first' },
  { label: 'old first', value: 'old-first' },
];

const TOOLTIPS_TEXT = {
  'personal': 'Show only my pet projects or those that I did on my own while taking programming courses',
  'commercial': 'Show only commercial projects'
}

const CLASSES = {
  'field--personal': 'ProjectsForm__field ProjectsForm__field--personal',
  'field--commercial': 'ProjectsForm__field ProjectsForm__field--commercial',
  'fields--filters': 'ProjectsForm__fields ProjectsForm__fields--filters',
  'category--filters': 'ProjectsForm__category ProjectsForm__category--filters',
}

const defaultSortValue = sortOptions[0].value;

function ProjectForm() {
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('all');
  const [selectedSort, setSelectedSort] = useState(defaultSortValue);

  const dispatch = useDispatch()

  const handleTypeFilterChange = (e) => {
    setSelectedTypeFilter(e.value);
    dispatch(setProjectsType(e.value));
  }

  const handleSortChange = (e) => {
    setSelectedSort(e.value);
    dispatch(setSort(e.value));
  }

  return (
    <form className="ProjectsForm">
      <div className="ProjectsForm__top">
        <div className={CLASSES['category--filters']}>
          <h3 class="ProjectsForm__category-title">Filter:</h3>
          <div className={CLASSES['fields--filters']}>
            <div className="ProjectsForm__field">
              <RadioButton
                inputId="type-all"
                value="all" name="city"
                onChange={(e) => handleTypeFilterChange(e)}
                checked={selectedTypeFilter === 'all'} />
              <label
                className="ProjectsForm__field-label"
                htmlFor="type-all">all</label>
            </div>
            <div
              className={CLASSES['field--personal']}
              data-pr-tooltip={TOOLTIPS_TEXT.personal}>
              <RadioButton
                inputId="type-personal"
                value="personal" name="personal"
                onChange={(e) => handleTypeFilterChange(e)}
                checked={selectedTypeFilter === 'personal'} />
              <label
                className="ProjectsForm__field-label"
                htmlFor="type-personal">personal</label>
              <Tooltip
                target=".ProjectsForm__field--personal"
                mouseTrack mouseTrackLeft={10}
                position="bottom" />
            </div>
            <div
              className={CLASSES['field--commercial']}
              data-pr-tooltip={TOOLTIPS_TEXT.commercial}>
              <RadioButton
                inputId="type-commercial"
                value="commercial" name="commercial"
                onChange={(e) => handleTypeFilterChange(e)}
                checked={selectedTypeFilter === 'commercial'} />
              <label
                className="ProjectsForm__field-label"
                htmlFor="type-commercial">commercial</label>
              <Tooltip
                target=".ProjectsForm__field--commercial"
                mouseTrack mouseTrackLeft={10} position="bottom" />
            </div>
          </div>
        </div>
        <div className="ProjectsForm__category">
          <h3 class="ProjectsForm__category-title">Sort:</h3>
          <div className="ProjectsForm__fields">
            <Dropdown
              options={sortOptions}
              placeholder="Select a City"
              value={selectedSort}
              onChange={(e) => handleSortChange(e)} />
          </div>
        </div>
      </div>
    </form >
  );
}

export default ProjectForm;
