import "./ProjectForm.scss";
import { useSelector, useDispatch } from 'react-redux'
import { setProjectsType, setSort } from '../../store/slices/formSlice'

import { useState } from "react";

import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { Tooltip } from 'primereact/tooltip';

const sortOptions = [
  { label: 'New first', value: 'new-first' },
  { label: 'Old first', value: 'old-first' },
];

const defaultSortValue = sortOptions[0].value;

function ProjectForm() {
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('all');
  const [selectedSort, setSelectedSort] = useState(defaultSortValue);

  const dispatch = useDispatch()

  const handleTypeFilterChange = (e) => {
    setSelectedTypeFilter(e.value);
    dispatch(setProjectsType(e.value))
  }

  const handleSortChange = (e) => {
    setSelectedSort(e.value);
    dispatch(setSort(e.value))
  }

  return (
    <form className="ProjectsForm">
      <div className="ProjectsForm__top">
        <div className="ProjectsForm__category">
          <h3 class="ProjectsForm__category-title">Filter:</h3>
          <div className="ProjectsForm__field">
            <RadioButton inputId="type-all" value="all" name="city" onChange={(e) => handleTypeFilterChange(e)} checked={selectedTypeFilter === 'all'} />
            <label className="ProjectsForm__field-label" htmlFor="type-all">All</label>
          </div>
          <div className="ProjectsForm__field ProjectsForm__field--personal" data-pr-tooltip="Show only my pet projects or projects that I've done though web dev courses">
            <RadioButton inputId="type-personal" value="personal" name="city" onChange={(e) => handleTypeFilterChange(e)} checked={selectedTypeFilter === 'personal'} />
            <label className="ProjectsForm__field-label" htmlFor="type-personal">Personal</label>
            <Tooltip target=".ProjectsForm__field--personal" mouseTrack mouseTrackLeft={10} position="bottom" />
          </div>
          <div className="ProjectsForm__field ProjectsForm__field--commercial" data-pr-tooltip="Show only commercial projects that I've done on my previoud jobs and I didn't signed NDA for">
            <RadioButton inputId="type-commercial" value="commercial" name="city" onChange={(e) => handleTypeFilterChange(e)} checked={selectedTypeFilter === 'commercial'} />
            <label className="ProjectsForm__field-label" htmlFor="type-commercial">Commercial</label>
            <Tooltip target=".ProjectsForm__field--commercial" mouseTrack mouseTrackLeft={10} position="bottom" />
          </div>
        </div>
        <div className="ProjectsForm__category">
          <h3 class="ProjectsForm__category-title">Sort by:</h3>
          <Dropdown options={sortOptions} placeholder="Select a City" value={selectedSort} onChange={(e) => handleSortChange(e)} />
        </div>
      </div>
    </form >
  );
}

export default ProjectForm;
