function Countdown()
{
    this.start_time = "25:00";
    this.end_time = "0:00";
    this.target_id = "countdown_timer";
    this.paused = true;
    this.name = 'timer';
    this.eventHandlers = {}
}

Countdown.prototype.target = function()
{
    return $("#" + this.target_id);
}

Countdown.prototype.update_target = function()
{
    minutes = this.minutes;
    seconds = this.seconds;
    if(seconds < 10) seconds = "0" + seconds;
    $("#" + this.target_id).val(minutes + ":" + seconds);
}

Countdown.prototype.pause = function()
{
    this.paused = true;
    this.fire('pause');
}

Countdown.prototype.resume = function()
{
    this.paused = false;
    this.fire('play');
}

Countdown.prototype.init = function()
{
    this.reset();
    setInterval(this.name + '.tick()', 1000);
}

Countdown.prototype.tick = function()
{
    if(!this.paused && !(this.seconds <= 0 && this.minutes <=0)){
        this.seconds = this.seconds - 1;
        if(this.seconds <= 0 && this.minutes > 0){
            this.minutes--;
            this.seconds = 59;
        }
    }
    this.update_target();
}

Countdown.prototype.start = function()
{
    this.reset();
    this.paused = false;
}

Countdown.prototype.reset = function(time)
{
    if(time == undefined) time = this.start_time;
    time_ary = time.split(":");
    this.minutes = parseInt(time_ary[0]);
    this.seconds = parseInt(time_ary[1]);
    this.update_target();
    this.pause();
    this.fire('stop');
}

Countdown.prototype.registerHandler = function(event, data, handler)
{
    this.target().bind(event, data, handler);
}

Countdown.prototype.fire = function(event)
{
    this.target().trigger(event)
}