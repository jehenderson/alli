import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import QuickNav from '../components/QuickNav';
import SideMenu from '../components/PulloutMenu';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Alli
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [
  {
    id: 'confidentiality',
    heading: "Your Confidentiality",
    content: `Your answers will not be stored, and our organization will never
              share your usage data with any other party.`
  },
  {
    id: 'choices',
    heading: "Your Choices",
    content: `No legal jargon and no surprises. Once you select your timeframe,
              Athena will connect you with relevant resources, sorted by priority
              and urgency.`
  },
  {
    id: 'decisions',
    heading: "Your Decisions",
    content: `Athena will never automatically submit information or contact any
              resource on your behalf. You control your journey.`
  },
  {
    id: 'medical',
    heading: "Medical Care",
    content: `Concerned about injuries, sexually-transmitted diseases,
              or possible pregnancy?

              The UVA Health System provides medical care to prevent possible
              infections and pregnancy. For evidence collection, a SANE Nurse
              can administer a forensic exam if the incident occurred within
              120 hours (5 days).`
  },
  {
    id: 'police',
    heading: "Police Reporting",
    content: `Contact the police if you want to open a police investigation.
              The police have unique legal authority to execute search warrants,
              collect evidence, and make arrests.`
  },
  {
    id: 'counselingAndAdvocacy',
    heading: "Advocacy & Counseling",
    content: `There are a number of dedicated hotlines, counselors, and
              advocates available 24/7.

              These free resources are completely confidential, which which
              means they do not have to report the incident to the University
              or Police.`
  },
  {
    id: 'universityReporting',
    heading: "University Reporting",
    content: `A formal University report is filed through Just Report It, and
              immediately triggers a Title IX investigation. There is no time
              limit for reporting to the University.

              Reporting to the University can be done anonymously.
              Making a report doesn’t require the reporter to participate in
              any University investigations.`
  },
  {
    id: 'legal',
    heading: "Legal Representation",
    content: `Survivors have access to legal resources throughout the entire
              process. Legal resources have years of experience in this field,
              and serve as capable advocates from the beginning. Athena
              prioritizes connecting survivors with free legal resources.

              Legal representation can be acquired before a University or
              police report is filed.`
  },
  {
    id: 'universitySupport',
    heading: "University Support",
    content: `Survivors have access to a variety of protective and academic
              resources through the Office of the Dean of Students (ODOS).
              These resources are typically non-confidential. Examples of such
              resources include: Issuing a No Contact Directive, Modifying Housing
              Arrangements, Modifying Academic Schedules`
  },
]

/*const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const classes = useStyles();*/

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: [
        {
          id: 'confidentiality',
          heading: "Your Confidentiality",
          content: `Your answers will not be stored, and our organization will never
                    share your usage data with any other party.`
        },
        {
          id: 'choices',
          heading: "Your Choices",
          content: `No legal jargon and no surprises. Once you select your timeframe,
                    Athena will connect you with relevant resources, sorted by priority
                    and urgency.`
        },
        {
          id: 'decisions',
          heading: "Your Decisions",
          content: `Athena will never automatically submit information or contact any
                    resource on your behalf. You control your journey.`
        }
      ]
    };
  }

  getSelections = (dataFromNav) => {
    let cardsToDisplay = []
    dataFromNav.forEach((choice, index) => {
      if(choice !== 'No') {cardsToDisplay.push(cards[index+3])};
    })
    this.setState({
      display: cardsToDisplay
    });
  }


  render() {
    return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <SideMenu />
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div /*className={classes.heroContent}*/>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Athena
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Athena is a comprehensive and accurate set of resources,
              delivered with a priority for complete survivor confidentiality
              and actionability.
            </Typography>
            <div /*className={classes.heroButtons}*/>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <QuickNav stakeholder="survivor"
                  getSelections={this.getSelections}
                  btnVariant="contained"/>
                </Grid>
                <Grid item>
                  <QuickNav
                  stakeholder="supporter"
                  getSelections={this.getSelections}
                  btnVariant="outlined"/>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container /*className={classes.cardGrid}*/ maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {this.state.display.map(card => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Card /*className={classes.card}*/>
                    <CardMedia
                      //className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent /*className={classes.cardContent}*/>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.heading}
                      </Typography>
                      <Typography>
                        {card.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer /*className={classes.footer}*/>
        <Typography variant="h6" align="center" gutterBottom>
          Athena
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          You are not alone.
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );}
}
