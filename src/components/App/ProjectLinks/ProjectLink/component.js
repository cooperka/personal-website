import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 320,
    margin: theme.spacing(1),
  },
  anchor: {
    margin: 5,
    padding: 5,
    display: 'inline-block',
  },
  title: {
    fontSize: 18,
  },
}));

const ProjectLink = ({ name, description, url }) => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardContent>
        <Typography className={classes.title}>
          <a className={classes.anchor} href={url}>
            {name}
          </a>
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

ProjectLink.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default ProjectLink;
